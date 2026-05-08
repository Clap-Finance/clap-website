export type WaitlistEmailData = {
  full_name: string;
  email: string;
};

/**
 * Returns { html, text } for the waitlist confirmation email.
 * Keep this function pure — no side effects, no async.
 */
export function buildWaitlistConfirmationEmail(data: WaitlistEmailData): {
  subject: string;
  html: string;
  text: string;
} {
  const { full_name } = data;
  const firstName = full_name.trim().split(" ")[0];

  const subject = `You're on the Clap waitlist 🎉`;

  const html = /* html */ `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>${subject}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="
  margin: 0;
  padding: 0;
  background-color: #0a0a0a;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background-color: #0a0a0a; padding: 48px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
          style="
            max-width: 560px;
            background-color: #111111;
            border-radius: 16px;
            border: 1px solid #222222;
            overflow: hidden;
          ">

          <!-- Hero band -->
          <tr>
            <td style="
              background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #16213e 100%);
              padding: 48px 40px 40px;
              text-align: center;
            ">
              <!-- Logo mark -->
              <div style="
                display: inline-block;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #e2b96f 0%, #c8922a 100%);
                border-radius: 14px;
                margin-bottom: 24px;
                line-height: 56px;
                font-size: 28px;
                text-align: center;
              ">👏</div>

              <h1 style="
                margin: 0 0 12px;
                font-size: 28px;
                font-weight: 800;
                letter-spacing: -0.5px;
                color: #ffffff;
                line-height: 1.2;
              ">You're in, ${firstName}.</h1>

              <p style="
                margin: 0;
                font-size: 15px;
                color: #8a9ab5;
                line-height: 1.6;
              ">
                Welcome to the Clap waitlist. We'll reach out as soon as<br />
                your spot opens up.
              </p>
            </td>
          </tr>

          <!-- Divider accent line -->
          <tr>
            <td style="height: 3px; background: linear-gradient(90deg, #e2b96f 0%, #c8922a 100%);"></td>
          </tr>

          <!-- Body content -->
          <tr>
            <td style="padding: 40px 40px 32px;">

              <!-- What happens next -->
              <p style="
                margin: 0 0 24px;
                font-size: 11px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                color: #c8922a;
              ">What happens next</p>

              <!-- Step 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin-bottom: 20px;">
                <tr>
                  <td width="40" valign="top" style="padding-right: 16px; padding-top: 2px;">
                    <div style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      background-color: #1c1c1c;
                      border: 1px solid #2a2a2a;
                      text-align: center;
                      line-height: 32px;
                      font-size: 13px;
                      font-weight: 700;
                      color: #c8922a;
                    ">1</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #ffffff;">
                      We review your application
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #5a6a7e; line-height: 1.6;">
                      Our team looks at every signup. We're rolling out access carefully to keep the experience great.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"
                style="margin-bottom: 20px;">
                <tr>
                  <td width="40" valign="top" style="padding-right: 16px; padding-top: 2px;">
                    <div style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      background-color: #1c1c1c;
                      border: 1px solid #2a2a2a;
                      text-align: center;
                      line-height: 32px;
                      font-size: 13px;
                      font-weight: 700;
                      color: #c8922a;
                    ">2</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #ffffff;">
                      You get early access
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #5a6a7e; line-height: 1.6;">
                      When your spot is ready, you'll receive an invite link directly to this email.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="40" valign="top" style="padding-right: 16px; padding-top: 2px;">
                    <div style="
                      width: 32px;
                      height: 32px;
                      border-radius: 50%;
                      background-color: #1c1c1c;
                      border: 1px solid #2a2a2a;
                      text-align: center;
                      line-height: 32px;
                      font-size: 13px;
                      font-weight: 700;
                      color: #c8922a;
                    ">3</div>
                  </td>
                  <td valign="top">
                    <p style="margin: 0 0 4px; font-size: 14px; font-weight: 600; color: #ffffff;">
                      Start using Clap
                    </p>
                    <p style="margin: 0; font-size: 13px; color: #5a6a7e; line-height: 1.6;">
                      Jump in, explore, and let us know what you think. Your feedback shapes the product.
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Separator -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background-color: #1e1e1e;"></div>
            </td>
          </tr>

          <!-- Footer CTA note -->
          <tr>
            <td style="padding: 28px 40px 36px; text-align: center;">
              <p style="
                margin: 0 0 20px;
                font-size: 13px;
                color: #5a6a7e;
                line-height: 1.7;
              ">
                Questions? Just reply to this email — we read every one.
              </p>

              <!-- Social row (optional — fill in real links) -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0"
                align="center" style="margin: 0 auto 24px;">
                <tr>
                  <td style="padding: 0 8px;">
                    <a href="#" style="
                      display: inline-block;
                      font-size: 12px;
                      color: #5a6a7e;
                      text-decoration: none;
                      font-weight: 500;
                    ">Twitter</a>
                  </td>
                  <td style="color: #2a2a2a; font-size: 12px;">·</td>
                  <td style="padding: 0 8px;">
                    <a href="#" style="
                      display: inline-block;
                      font-size: 12px;
                      color: #5a6a7e;
                      text-decoration: none;
                      font-weight: 500;
                    ">Instagram</a>
                  </td>
                  <td style="color: #2a2a2a; font-size: 12px;">·</td>
                  <td style="padding: 0 8px;">
                    <a href="#" style="
                      display: inline-block;
                      font-size: 12px;
                      color: #5a6a7e;
                      text-decoration: none;
                      font-weight: 500;
                    ">Website</a>
                  </td>
                </tr>
              </table>

              <p style="
                margin: 0;
                font-size: 11px;
                color: #2e2e2e;
                line-height: 1.6;
              ">
                © ${new Date().getFullYear()} Clap. All rights reserved.<br />
                You're receiving this because you joined our waitlist.
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();

  const text = `
Hey ${firstName},

You're on the Clap waitlist!

Here's what happens next:

1. We review your application — we look at every signup carefully.
2. You get early access — we'll send your invite link to this email.
3. Start using Clap — explore and share your feedback.

Questions? Reply to this email.

© ${new Date().getFullYear()} Clap. All rights reserved.
  `.trim();

  return { subject, html, text };
}