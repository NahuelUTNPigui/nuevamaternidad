import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender:{
			entries:[
				"/",
				"/bebes",
				"/bebes/1",
				"/bebes/nuevo",
				"/inicio",
				"/login",
				"/medicos",
				"/medicos/1",
				"/reportes",
				"/signup",
				"/unidades",
				"/unidades/1",
				"/user/config",
				"/user/lista",
				"/user/perfil/1",

				
				]
		}
	}
};

export default config;
