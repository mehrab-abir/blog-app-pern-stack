import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../db/prisma";
import { sendEmail } from "../utils/sendEmail";

export const auth = betterAuth({
  trustedOrigins: ["http://localhost:3000"],
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendOnSignIn: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Email Verification</title>
  </head>

  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial, Helvetica, sans-serif;">
    
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:white;border-radius:8px;padding:40px;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <tr>
              <td align="center">
                <h2 style="margin:0;color:#333;">Verify Your Email</h2>
              </td>
            </tr>

            <!-- Greeting -->
            <tr>
              <td style="padding-top:20px;color:#555;font-size:16px;">
                Hello ${user?.name || "there"},
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding-top:10px;color:#555;font-size:16px;line-height:1.6;">
                Thank you for signing up. Please confirm your email address by clicking the button below.
              </td>
            </tr>

            <!-- Button -->
            <tr>
              <td align="center" style="padding:30px 0;">
                <a href="${url}" 
                   style="background:#2563eb;color:white;text-decoration:none;padding:14px 28px;border-radius:6px;font-size:16px;font-weight:bold;display:inline-block;">
                   Verify Email
                </a>
              </td>
            </tr>

            <!-- Backup link -->
            <tr>
              <td style="color:#777;font-size:14px;">
                If the button doesn't work, copy and paste this link into your browser:
                <br><br>
                <a href="${url}" style="color:#2563eb;">${url}</a>
              </td>
            </tr>

            <!-- Expiry notice -->
            <tr>
              <td style="padding-top:20px;color:#999;font-size:13px;">
                This verification link will expire soon. If you did not create this account, you can safely ignore this email.
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top:30px;border-top:1px solid #eee;color:#aaa;font-size:12px;text-align:center;">
                © ${new Date().getFullYear()} Your App Name. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;

      await sendEmail(user.email, "Verify your email", html);
      //* (to, subject, email body)
    },
    autoSignInAfterVerification: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["admin", "user"],
        defaultValue: "user",
        input: false,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        defaultValue: "active",
        required: false,
      },
    },
  },
});
