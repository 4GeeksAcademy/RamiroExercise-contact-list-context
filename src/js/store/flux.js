const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// Your data structures, A.K.A Entities
			contactData: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			getDatosAgenda: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Ramiro")
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						// console.log(data);
						setStore({ contactData: data });
					})
					.catch(error => console.log(error));
			},
			creacionContacto: function(fullName, email, address, phone) {
				fetch("https://playground.4geeks.com/apis/fake/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "Ramiro",
						address: address,
						phone: phone
					})
				})
					.then(resp => {
						console.log(resp);
						console.log(resp.status);
						return resp.json();
					})
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
