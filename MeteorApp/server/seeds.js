import Details from '/lib/collections/details';

const seed = () => {
  if (Details.find().count() === 0) {
    for (let i = 0; i < 10; i++) {
      Details.insert({
        name: `Detail #${i}`
      });
    }
  }
}

export default seed;
