/**
 *
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export async function GET(request) {
  return fetch("https://easily-api.jojicompany.com/posts");
}
