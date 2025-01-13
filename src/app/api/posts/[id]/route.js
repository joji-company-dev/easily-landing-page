/**
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export async function GET(request, { params }) {
    const { id } = params;

    const response = await fetch(`https://easily-api.jojicompany.com/posts/${id}`);

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  }