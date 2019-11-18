export default async function () {
  try {
    const result = await fetch(
      'https://contact-form-2-861c3.firebaseio.com/projects.json', {
        method: 'GET',
      },
    )
    return result.json()
  } catch (error) {
    throw new Error(error)
  }
}