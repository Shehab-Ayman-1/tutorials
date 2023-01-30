/* 
    middleware -> It Is A Normal Function Run Before The Server Response To Send Any Data To The Response
    - express.json() -> Let The Application To Accept JSON Data
    - express.urlencoded()
    - express.static() -> Read The Data From File In The Directory [http://localhost:5000/decode.txt]
*/

export const MIDDLE_WARE = async (req, res, next) => {
	req.currentTime = new Date().getTime();
	next();
};
