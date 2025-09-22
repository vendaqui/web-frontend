import { NextResponse, type NextRequest } from 'next/server';

const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(k, v);
  }

  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline' fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "font-src 'self' fonts.gstatic.com",
    "connect-src 'self' https: http:",    
    "frame-ancestors 'none'"
  ].join('; ');
  response.headers.set('Content-Security-Policy', csp);

  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/api')) {
    const token = request.cookies.get('auth_token')?.value;
    if (!token) {
      return new NextResponse('Unauthorized', { status: 401, headers: response.headers });
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
