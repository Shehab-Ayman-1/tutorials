import os from "os";

/* 
   os.freemem -> Get The Free Space In The RAM
   os.totalmem -> Get The Total Stace In The RAM
   os.homedir -> Get The Home Directory
*/
export const operatingSystem = () => {
	const freesMemory = os.freemem();
	const totalMemory = os.totalmem();
	const homedir = os.homedir();

	console.table({ freesMemory, totalMemory, homedir });
};
