export const parseText = (lyrics) => {
  let parsedLyrics = lyrics.toLowerCase().replace(/i'/g, "I\'").replace(/ i /g, "I ").replace(/<br>||\n/g, "").replace(/,/g, "").replace(/\s+/g, " ");
  const lyricArr = parsedLyrics.split(" ");
  return lyricArr;
}