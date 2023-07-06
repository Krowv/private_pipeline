	$(document).on('click', '#lang', function() {
	    if (typeof(Storage) !== "undefined") {
	        if (localStorage.getItem("language") == "French") {
	            localStorage.removeItem("language");
	            convertEnglish();


	        } else {
	            localStorage.setItem("language", "French");
	            convertFrench();
	        }
	    } else {
	        alert("Sorry, your browser does not support Web Storage...");
	    }
	    console.log(localStorage.getItem("language") == "French")
	});

	function convertEnglish() {
	    $(".home_text").html("Home");
	    $(".about_text").html("About Us");
	    $(".contact_text").html("Contact Us");
	    $("#lang").html("French");
	    $(".donate_text").html("Donate");
	    $(".result_text").html("Results");
	    $(".quatation").html("No one has ever become good as we are");
	    $(".quatation1").html("It's not how much we give but how much love we put into doing our products");
	    $(".quatation2").html("When we provide good service, we enjoy it at most");
	    $(".quotation3").html("The simplest acts of doing our job, is an act of happiness");
	    $(".name").html("Name");
	    $(".email").html("Email");
	    $(".message").html("Message");
	    $("#choose").html("Choose your option");
	    $("#male").html("Male");
	    $("#female").html("Female");
	    $("#gender").html("Gender");
	    $("#d_text").html("Select The Amount to Donate");
	    $(".about_us").html("AJL is a global organization providing good products, service and customer care. Providing support to various companies and private users. Making the best products for the best people in the world.");
	}

	function convertFrench() {
	    $(".home_text").html("Accueil");
	    $(".about_text").html("A propos");
	    $(".contact_text").html("Contact");
	    $("#lang").html("English");
	    $(".donate_text").html("Doner");
	    $(".result_text").html("Résultats");
	    $(".quatation").html("Personne n'a été si bon que nous le sommes");
	    $(".quatation1").html("Ce n'est pas combien nous donnons, mais combien d'amour nous mettons dans la réalisation de nos produits");
	    $(".quatation2").html("Quand nous fournissons un bon service, nous l'apprécions au plus haut point");
	    $(".quotation3").html("Les actes les plus simples de faire notre travail, est un acte de bonheur");
	    $(".name").html("Nom");
	    $(".email").html("E-mail");
	    $(".message").html("Message");
	    $("#choose").html("Choisissez votre option");
	    $("#male").html("Homme");
	    $("#female").html("Femme");
	    $("#gender").html("Genre");
	    $("#d_text").html("Sélectionnez le montant à donner");
	    $(".about_us").html("AJL est une organisation mondiale fournissant de bons produits, services et service à la clientèle. Fournir un soutien à diverses entreprises et utilisateurs privés. Faire les meilleurs produits pour les meilleures personnes du monde.");
	}