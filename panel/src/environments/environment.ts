// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyAUMKgQAni5x9uCEJvlOxmn3vIDAbSDkc8",
		authDomain: "yochi-panel.firebaseapp.com",
		databaseURL: "https://yochi-panel-default-rtdb.firebaseio.com",
		projectId: "yochi-panel",
		storageBucket: "yochi-panel.appspot.com",
		messagingSenderId: "1032860825891",
		appId: "1:1032860825891:web:ab09751b7597b98b68f496",
		measurementId: "G-TS1LP1BF3H"
	},
	onesignal: {
		appId: "63a1d142-32ef-45ef-acf7-7488bf80f157",
		googleProjectNumber: "540145033481",
		restKey: "ODliODBjOWQtZjNiMC00M2E4LTlkMmEtM2YzODA0MDc0YWNk"
	},
	stripe: {
		publicKey: "pk_test_51HZSxILl147XFj5bAj40kozHfQqdXjYqjTcOrWqYGl2rXaUBD0d5SkhL922hN1Nbx86zXpdGiXJLfO68mVlYjKAj00cfuq1uo7",
		secretKey: "sk_test_51HANxLKYYXIfd3HLtpOk9GiXjfPdpuSwxGsFuaYIJU85xTrFjfF2gtSr1Cy10lXX11sivCEyn19uTz6qeIDKAl4J00ZA0tQ6Io"
	},
	general: {
		symbol: "$",
		code: "MXN"
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
