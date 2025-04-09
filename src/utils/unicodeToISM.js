export const unicodeToISM = (unicodeText) => {
  // Replace with actual mapping rules
  return unicodeText
  // Vowels  
  .replace(/अ/g, "A")  // Example, map 'अ' to ISM 'A'
    .replace(/आ/g, "Aa")
    .replace(/इ/g, "i")
    .replace(/ई/g, "I")
    .replace(/उ/g, "u")
    .replace(/ऊ/g, "U")
    .replace(/ए/g, "e")
    .replace(/ऐ/g, "E")
    .replace(/ओ/g, "o")
    .replace(/औ/g, "O")
    .replace(/अं/g, "aM")
    .replace(/अः/g, "aH")
    // Add more rules here
    // Consonants
    .replace(/क/g, "k")
    .replace(/ख/g, "K")
    .replace(/ग/g, "g")
    .replace(/घ/g, "G")
    .replace(/च/g, "c")
    .replace(/छ/g, "C")
    .replace(/ज/g, "j")
    .replace(/झ/g, "J")
    .replace(/ट/g, "w")
    .replace(/ठ/g, "W")
    .replace(/ड/g, "q")
    .replace(/ढ/g, "Q")
    .replace(/ण/g, "N")
    .replace(/त/g, "t")
    .replace(/थ/g, "T")
    .replace(/द/g, "d")
    .replace(/ध/g, "D")
    .replace(/न/g, "n")
  
    .replace(/प/g, "p")
    .replace(/फ/g, "P")
    .replace(/ब/g, "b")
    .replace(/भ/g, "B")
    .replace(/म/g, "m")
  
    .replace(/य/g, "y")
    .replace(/र/g, "r")
    .replace(/ल/g, "l")
    .replace(/व/g, "v")
  
    .replace(/श/g, "S")
    .replace(/ष/g, "z")
    .replace(/स/g, "s")
    .replace(/ह/g, "h")
  
    // Matras
    .replace(/ा/g, "a")
    .replace(/ि/g, "i")
    .replace(/ी/g, "I")
    .replace(/ु/g, "u")
    .replace(/ू/g, "U")
    .replace(/े/g, "e")
    .replace(/ै/g, "E")
    .replace(/ो/g, "o")
    .replace(/ौ/g, "O")
    .replace(/ं/g, "M")
    .replace(/ँ/g, "n") // nasalization
    .replace(/्/g, "")  // halant/virama (skip)
  
    // Others
    .replace(/।/g, "|")
    .replace(/ /g, " ");
};
  