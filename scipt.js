function randomize() {
  const reactionPoints = document.getElementById("reaction_points");
  const memoryPoints = document.getElementById("memory_points");
  const verbalPoints = document.getElementById("verbal_points");
  const visualPoints = document.getElementById("visual_points");
  const resultPoints = document.getElementById("result_points");
  const max_points = 100 + 1;

  const reactionRandom = Math.floor(Math.random() * max_points);
  const memoryRandom = Math.floor(Math.random() * max_points);
  const verbalRandom = Math.floor(Math.random() * max_points);
  const visualRandom = Math.floor(Math.random() * max_points);

  reactionPoints.innerText = reactionRandom;
  memoryPoints.innerText = memoryRandom;
  verbalPoints.innerText = verbalRandom;
  visualPoints.innerText = visualRandom;

  const results = [reactionRandom, memoryRandom, verbalRandom, visualRandom];
  const sum = results.reduce((a, b) => a + b, 0);
  const average = parseInt(sum / results.length);
  resultPoints.innerText = average;
}
