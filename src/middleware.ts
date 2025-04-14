import createMiddleware from "next-intl/middleware";
import routing from "../next-intl.config";

export default createMiddleware(routing);

export const config = {
  // matcher: ["/", "/(es|en)/:path*"],
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)'
  ]
};