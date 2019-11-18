export default async function (data) {
  try {
    const result = await fetch(
      'https://contact-form-2-861c3.firebaseio.com/projects.json', {
        method: 'POST',
        body: JSON.stringify(data),
      },
    )
    return result.json()
  } catch (error) {
    throw new Error(error)
  }
}