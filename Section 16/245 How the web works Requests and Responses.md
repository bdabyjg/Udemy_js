# 245 How the web works: Requests and Responses

https://restcountries.eu/rest/v2/alpha/PT



This domain name, "restcountries.eu" now is not the real address of the server that we're trying to access. It's really just a nice name that is easy for us to memorized. But what this means is that we need a way of kind of converting the domain name to the real address of the server. That happens through a so-called "DNS",. "DNS" stands for domain name server and domain name servers are a special kind of server. So they are basically like the phone books of the Internet.

The first step happens when we access any Web server is that the browser makes a request to a DNS and this special server will then simply match the web address of the URL to the server's real IP address. This all happens through your Internet service provider, but the complete details don't really matter here. What you need to retain from this first part is that the domain is not the real address and that a DNS will convert the domain to the real IP address. Then after the real IP address has been sent back to the browser, we can finally call it. So this is how the real address looks like. It still has the protocol, but then comes the IP address. And also the port that we access on the server. And this port number is really is just to identify a specific service that's running on a server. You can think of it like a sub address. This port number has nothing to do with "/rest/v2" resource that we want to access. That resource will actually be sent over in the HTTP request. That actually wraps up the first step. So once we have the real IP address, a TCP socket connection is established between the browser and the server. So they are now finally connected. This connection is typically kept alive for the entire time that it takes to transfer all files of the websites or all data.

Now, what are TCP and IP? Well, TCP is the transmission control protocol and IP is the Internet Protocol. And together they are communication protocols that define exactly how data travels across the web. They are basically the Internet's fundamental control system,because they are the ones who set the rules about how data moves on the Internet.



Finally it's time to make our request. The request we make is an HTTP request where HTTP stands for Hypertext Transfer Protocol. So after TCP/IP, HTTP is another communication protocol. A communication protocol is simply a system of rules that allows two or more parties to communicate. Now in the case of HTTP, it's just a protocol that allows client and web servers to communicate. That works by sending requests and response messages from client to server and back. A request message will look something like this. The beginning of the message is the most important part called the start line. 

`GET /rest/v2/alpha/PT HTTP/1.1 `

`Host:www.google.com `

`User-Agent: Mozilla/5.0 `

`Accept-Language: en-US `

`<BODY>`

This one contains the HTTP method that is used in the request, then the request target and the HTTP version. So about the HTTP methods, there are many available, but the most important ones are: GET, for simply requesting data; POST, for sending data; and PUT and PATCH to basically modify data. So you'll se that an HTTP request to a server is not only for getting data, but we can also send data. Now about the request target. This is where the server is told that we want to access the "rest/v2/alpha" resource. So we had this in the URL before and now it is simply sent as the target in the HTTP request. And so then the server can figure out what to do with it. If this target was empty then we would be accessing the website's route, which is just "restcountries.eu" in this example. The next part of the request are the request headers,which is just some information that we sent about the request itself. There are tons of standard different headers, like what browser is used to make the request, at what time , user's language and many many more. In the case we're sending data to the server. There will also be a request body, and that body will contain the data that we're sending for example coming from an HTML form.

HTTPS is encrypted using TLS or SSL, which are yet some are protocols. Now the request is formed and now it hits the server which will the be working on it until it has our data or web page ready to send back. The HTTP response message actually looks quite similar to the request.

`HTTP/1.1 200 OK `

`Date: Fri,18 Jan 2021 `

`COntent-Type:text/html `

`Transfer-Encoding:chunked `

`<BODY>`

Also with a start line, headers and a body. In this case the start line has besides the version also a status code and a message. These are used to let the client know whether the request has been successful or failed. For example 200 means ok. Then the response headers are information about the response itself. Just like before, there are a ton available and we can also make up our own actually. Finally the last part of the response is the body, which is present in most responses, and this body usually contains the JSON data coming back from the API or the HTML of the Web page that we requested or something like that. However, if it's a webpage that we're accessing, then there will be many more requests and responses. That's because when we do the first request, all we get back is just the initial HTML file. That HTML file will then get scanned by the browser for all the assets that it needs in order to build the entire web page like JavaScript, CSS files, image files or other assets. For each different file there will be a new HTTP request made to the server. Basically this entire back and forth between client and server happens for every single file that is included in the web page. However there can be multiple requests and responses happening at the same time, but the amount is still limited because otherwise the connection would start to slow down. Anyway, when all the files have finally arrived, then the web page can be rendered in the browser according to the HTML, CSS and JavaScript specifications that you already know.



**TCP/IP**

TCP and IP are the communication protocols that define how data travels across the web. The job of TCP is to break the requests and responses down into thousands of small chunks, called packets before they are sent. Once the small packets arrive at their final destination, TCP will reassemble all the packets into the original request or response. This is necessary so that each packet can take a different route through the Internet because this way the message arrives at the destination as quick as possible which would not be possible if wen sent the entire data simply as a big chunk. That would be like trying to go through dense traffic with like the biggest bus that you can imagine. As a second part the job of the IP protocol is to actually send and route these packets through the Internet. So it ensures that they arrive at the destination they should go, using IP addresses on each packet. 