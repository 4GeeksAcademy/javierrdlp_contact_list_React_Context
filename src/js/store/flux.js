const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[],
			contact:[]

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getContacts: () =>{
				fetch("https://playground.4geeks.com/contact/agendas/javierR/contacts")
				.then((response) => {
					return response.json()
				})
				.then((data) => {
					console.log(data);
					
					setStore({contacts: data.contacts})
				})
				.catch((err) => {err})
			},
			
			deleteContact: (id) => {  
        		fetch(`https://playground.4geeks.com/contact/agendas/javierR/contacts/${id}`, {
					method: "DELETE",
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => {
						getActions().getContacts()
					})
					.catch((err) => { err }) 					       
						
			},
		
			editContact:(id, contact, navigate) =>{
				let data = {
					"name": contact.name,
					"phone": contact.phone,
					"email": contact.email,
					"address": contact.address
				}
		
				fetch(`https://playground.4geeks.com/contact/agendas/javierR/contacts/${id}`, {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						
						return response.json()
					})
					.then((data) => {
						console.log(data)
						getActions().getContacts()
					    navigate("/")		
					})
					.catch((err) => { err })

			}
		}
	};
};

export default getState;
