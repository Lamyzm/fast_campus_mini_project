export function decodedJWT(token) {
  try {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(Buffer.from(payload, 'base64').toString('utf-8'));
    return decodedPayload
  } catch (error) {
    console.error('JWT 토큰에서 exp 시간을 추출하는 중 오류 발생');
    return null;
  }
}
