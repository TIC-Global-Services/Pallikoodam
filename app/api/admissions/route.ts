import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

const SHEET_HEADERS = [
  'Submitted At',
  'Learner Name',
  'Grade',
  'Phone',
  'Email',
]

async function appendToGoogleSheet(data: {
  learnerName: string
  grade: string
  phone: string
  email: string
  submittedAt: string
}) {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!serviceAccountEmail || !privateKey || !sheetId) {
    console.warn(
      '[Admissions] Google Sheets credentials not configured. ' +
      'Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID in .env.local'
    )
    return false
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccountEmail,
      private_key: privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // Ensure headers exist by checking row 1
  try {
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:E1',
    })

    if (!existing.data.values || existing.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: 'Sheet1!A1:E1',
        valueInputOption: 'RAW',
        requestBody: { values: [SHEET_HEADERS] },
      })
    }
  } catch {
    // Write headers if range is empty
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:E1',
      valueInputOption: 'RAW',
      requestBody: { values: [SHEET_HEADERS] },
    })
  }

  // Append the form row
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:E',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          data.submittedAt,
          data.learnerName,
          data.grade,
          data.phone,
          data.email,
        ],
      ],
    },
  })

  return true
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { learnerName, grade, phone, email, submittedAt } = body

    // Basic validation
    if (!learnerName || !grade || !phone || !email) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    const written = await appendToGoogleSheet({
      learnerName,
      grade,
      phone,
      email,
      submittedAt: submittedAt || new Date().toISOString(),
    })

    if (!written) {
      console.log(
        '[Admissions] Submission received (no sheet configured):',
        JSON.stringify({ learnerName, grade, phone, email, submittedAt })
      )
    }

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Admissions] Submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
