export function trimString(str, num) {
    if (!str) {
      return "";
    }
    return str.length > num ? str.substring(0, 20) + "..." : str;
  }