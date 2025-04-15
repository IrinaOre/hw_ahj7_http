export default async function createRequest(options) {
  const baseUrl = 'http://localhost:7070/?';

  const { method, url, body } = options;

  try {
    const response = await fetch(baseUrl + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      if (response.status === 204) {
        return { error: false, status: response.status };
      }

      return await response.json();
    }

    return { error: true, status: response.status };
  } catch (err) {
    return { error: true, status: 520 };
  }
}
