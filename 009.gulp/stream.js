console.log('hello world');
process.stdout.write('what then');
process.stdin.on('data',function(data){
	console.log(data.toString());
});
//https://nodejs.org/api/process.html