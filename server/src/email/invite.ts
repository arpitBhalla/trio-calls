type InviteTemplateType = {
  meetLink: string;
  chatLink: string;
  email: string;
  displayName: string;
};
export const InviteTemplate = ({
  chatLink,
  displayName,
  email,
  meetLink,
}: InviteTemplateType): string => `<!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width" name="viewport" />
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible" />
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
	<style id="media-query" type="text/css">
		@media (max-width: 720px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
	<style id="icon-media-query" type="text/css">
		@media (max-width: 720px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}
		}
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
	<!--[if IE]><div class="ie-browser"><![endif]-->
	<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;"
		valign="top" width="100%">
		<tbody>
			<tr style="vertical-align: top;" valign="top">
				<td style="word-break: break-word; vertical-align: top;" valign="top">
					<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
					<div style="background-color:#eeeeee;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eeeeee;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 60px; padding-left: 60px; padding-top:5px; padding-bottom:5px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 60px; padding-left: 60px;">
											<!--<![endif]-->
											<div align="center" class="img-container center fixedwidth"
												style="padding-right: 15px;padding-left: 15px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 15px;padding-left: 15px;" align="center"><![endif]-->
												<div style="font-size:1px;line-height:15px"></div><a
													href="ms-teams.vercel.app" style="outline:none" tabindex="-1"
													target="_blank"><img align="center" alt=" Teams Logo" border="0"
														class="center fixedwidth"
														src="images/91dc7174-56fc-4d68-9c5f-2c15637f9e58.png"
														style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 116px; max-width: 100%; display: block;"
														title=" Teams Logo" width="116" /></a>
												<div style="font-size:1px;line-height:15px"></div>
												<!--[if mso]></td></tr></table><![endif]-->
											</div>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#eeeeee;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eeeeee;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:#ffffff;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:10px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:10px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
											<div
												style="color:#040000;font-family:'Ubuntu', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="font-size: 14px; line-height: 1.2; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; color: #040000; mso-line-height-alt: 17px;">
													<p
														style="margin: 0; font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
														<strong>${displayName}</strong> ${email} is inviting you to join
														a video meeting.</p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<div align="center" class="button-container"
												style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${meetLink}" style="height:31.5pt;width:84pt;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#464eb8"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]--><a
													href="${meetLink}"
													style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #464eb8; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #464eb8; border-right: 1px solid #464eb8; border-bottom: 1px solid #464eb8; border-left: 1px solid #464eb8; padding-top: 5px; padding-bottom: 5px; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"
													target="_blank"><span
														style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span
															style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Join
															Meet</span></span></a>
												<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
											</div>
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
											<div
												style="color:#555555;font-family:'Ubuntu', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="font-size: 14px; line-height: 1.2; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 17px;">
													<p
														style="margin: 0; font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
														${meetLink}</p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
											<div
												style="color:#555555;font-family:'Ubuntu', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="font-size: 14px; line-height: 1.2; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 17px;">
													<p
														style="margin: 0; font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
														or</p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<div align="center" class="button-container"
												style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${chatLink}" style="height:31.5pt;width:166.5pt;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#464eb8"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Tahoma, Verdana, sans-serif; font-size:16px"><![endif]--><a
													href="${chatLink}"
													style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #464eb8; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 1px solid #464eb8; border-right: 1px solid #464eb8; border-bottom: 1px solid #464eb8; border-left: 1px solid #464eb8; padding-top: 5px; padding-bottom: 5px; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"
													target="_blank"><span
														style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span
															style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Join
															chat before meeting</span></span></a>
												<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
											</div>
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
											<div
												style="color:#555555;font-family:Ubuntu, Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="font-size: 14px; line-height: 1.2; color: #555555; font-family: Ubuntu, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 17px;">
													<p
														style="margin: 0; font-size: 11px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 13px; margin-top: 0; margin-bottom: 0;">
														<span style="font-size: 11px;">Please create account with same
															email to access chat if you are new to Teams</span></p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:#eeeeee;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eeeeee;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
											<div
												style="color:#555555;font-family:'Ubuntu', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="font-size: 14px; line-height: 1.2; font-family: 'Ubuntu', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 17px;">
													<p
														style="margin: 0; font-size: 14px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 17px; margin-top: 0; margin-bottom: 0;">
														Teams by Arpit Bhalla</p>
												</div>
											</div>
											<!--[if mso]></td></tr></table><![endif]-->
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 700px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
								<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:700px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
								<!--[if (mso)|(IE)]><td align="center" width="700" style="background-color:transparent;width:700px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
								<div class="col num12"
									style="min-width: 320px; max-width: 700px; display: table-cell; vertical-align: top; width: 700px;">
									<div class="col_cont" style="width:100% !important;">
										<!--[if (!mso)&(!IE)]><!-->
										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
											<!--<![endif]-->
											<table cellpadding="0" cellspacing="0" role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tr style="vertical-align: top;" valign="top">
													<td align="center"
														style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; text-align: center;"
														valign="top">

													</td>
												</tr>
											</table>
											<!--[if (!mso)&(!IE)]><!-->
										</div>
										<!--<![endif]-->
									</div>
								</div>
								<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
								<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
							</div>
						</div>
					</div>
					<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>
	<!--[if (IE)]></div><![endif]-->
</body>

</html>`;
