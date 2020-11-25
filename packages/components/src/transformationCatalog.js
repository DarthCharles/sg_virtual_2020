const createTransformation = (label, sample_a, sample_A) => ({
  label,
  sampleLowerCaseA: sample_a,
  sampleUpperCaseA: sample_A,
});

const transformations = [
  createTransformation('bold sans', '𝗮', '𝗔'),
  createTransformation('italic sans', '𝘢', '𝘈'),
  createTransformation('bold + italic sans', '𝙖', '𝘼'),
  createTransformation('bold serif', '𝐚', '𝐀'),
  createTransformation('italic serif', '𝑎', '𝐴'),
];

export default transformations;
