export default function tryRequireParseComponent(){
	try{
		return require('vue-template-compiler')
	}catch(e){
		return require('./template-compiler-v3')
	}
}