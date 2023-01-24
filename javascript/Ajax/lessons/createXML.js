import { github } from "../constants/constants.js";

const readyState = () => {
	// Create New Request
	let request = new XMLHttpRequest();

	// Work When The Readystate Change
	request.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			console.log(this.responseText);
		}

		/* 
            readystate => Is The Statue Is The Request
            [0] The Request Is Not Initialized
            [1] The Server Is Connected Now 
            [2] The Request Is Recieved Now
            [3] Processing The Request
            [4] The Request Is Finished, And The Response Is Ready

            Status => Is The Response Of The Request
            -- Successfull Response
            [200] Of
            [201] Created
            [202] Accepted
            [203] Non-Authoritative Information
            [204] No Content
            [205] Reset Content
            -- Redirection Messages
            [300] Multiple Choices
            [301] Moved Parmanetly
            [302] Found
            [303] See Other
            [304] Not Modified
            [305] Use Proxy
            -- Client Error Responses
            [400] Bad Request
            [401] Unauthorized
            [402] Payment Required
            [403] Forbidden
            [404] Not Found
            [405] Method Not Allowed
            [406] Not Acceptable
            -- Server Error Response 
            [500] Internal Server Error
            [501] Not Implemented
            [502] Bad Gateway
            [503] Service Unavailable
            [504] Gateway Timeout
        */
	};

	/* 
        -- Open New Request
        Request => Get, Post, Delete, Put - Patch
        Url => Any Local Or Remotly Url
        Async => true: The Page Is Working And Not Waiting The Data From Server, false: Waiting The Data From The Server Then Contenue Loading The Page
        User, Password => Optional For The Authontication
    */
	request.open("Get", github, true); // [Request, URL, Async, User, Password]
	// Send The Request To The Server
	request.send();
};

export default readyState;
