const storyElement = document.getElementById('story');
const button = document.getElementById('generate');

const characters = ['a talking pineapple', 'a dancing cat', 'an invisible robot', 'a lazy panda'];
const places = ['on the moon', 'in a haunted house', 'inside a volcano', 'in a magical forest'];
const actions = ['sang opera', 'ate spaghetti', 'built a spaceship', 'did the floss dance'];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

button.addEventListener('click', () => {
  const character = randomItem(characters);
  const place = randomItem(places);
  const action = randomItem(actions);

  const story = `One day, ${character} went ${place} and ${action}! 😂`;
  storyElement.textContent = story;
});
