export function getContact(context, id) {
  return this.$axios
    .get("contacts/getcontact/" + id)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error.response.data.Errors;
    });
}

export function getContacts(context) {
  return this.$axios.get("contacts/getcontacts").then(response => {
    context.commit("setContacts", response.data);
  });
}

export function addContact(context, contact) {
  return this.$axios
    .post("contacts/addcontact", contact)
    .then(response => {
      if (response.data.success) {
        context.commit("addContact", response.data.data);
        return response.data;
      }
    })
    .catch(error => {
      throw error.response.data.Errors;
    });
}

export function updateContact(context, contact) {
  return this.$axios
    .put("contacts/updatecontact", contact)
    .then(response => {
      if (response.data.success) {
        context.commit("updateContact", contact);
        return response.data;
      }
    })
    .catch(error => {
      throw error.response.data.Errors;
    });
}

export function deleteContact(context, id) {
  return this.$axios
    .delete("contacts/deletecontact/" + id)
    .then(response => {
      if (response.data.success) {
        context.commit("deleteContact", id);
      }
    });
}
