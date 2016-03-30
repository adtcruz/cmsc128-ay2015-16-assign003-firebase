function recordAttendance(){
	var guestname = $('#guest_name').val();
	var guestcontactnumber = $('#guest_contact').val();
	var guestorganisation = $('#guest_organisation').val();
	var commentsfromguest = $('#comments_from_guest').val();
	new Firebase(FIREBASE URL HERE).push().set({Name : guestname, ContactNumber: guestcontactnumber, Organisation: guestorganisation, Comments: commentsfromguest});
	return false;
}

document.getElementById("signme").onclick = recordAttendance;