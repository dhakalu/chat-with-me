import * as tf from '@tensorflow/tfjs'

/**
 * Load the model that we trained and hosted in herokuapp
 */
const model = (async () => {
  return tf.loadLayersModel('https://quiet-eyrie-88965.herokuapp.com/static/model.json')
})()

/**
 * List of possible intents that we have trained our bots on
 *
 * TODO: Move this logic to bakend pssibly?
 */

export const INTENTS = {
  greeting: 'greeting',
  aboutme: 'aboutme',
  profession: 'profession',
  favoriteMovie: 'favoriteMovie',
  favoriteColor: 'favoriteColor',
  school: 'school',
  major: 'major',
  name: 'name',
  currentWork: 'currentWork'
}

/**
 * Predicts the intent of user's utterance/query
 * @param {string} query Query string typed by user
 */
export const getIntent = async (query) => {
  try {
    const data = await model
    // I created service for this because i could not find
    // a good solution to tokenization, stemming and lemmantizing.
    const hotBag = await (await window.fetch(`https://quiet-eyrie-88965.herokuapp.com/?q=${query}`)).json()
    const input = tf.tensor([hotBag.data])
    const values = data.predict(input).dataSync()
    let intentIndex = -1
    let highestProbability = 0
    values.forEach((prediction, i) => {
      if (prediction > highestProbability) {
        intentIndex = i
        highestProbability = prediction
      }
    })
    return intentIndex >= 0 ? Object.keys(INTENTS)[intentIndex] || 'intentNotAdded' : 'unknown'
  } catch (error) {
    console.error(error)
    return 'error'
  }
}
