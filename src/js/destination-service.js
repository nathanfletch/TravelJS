export default class DestinationService {
  static async getDestinations() {
    try {
      const response = await fetch(
        `http://www.localhost:5000/api/destinations`
      );
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}

