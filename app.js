(function() {

  // americangladiators.zendesk.com - 24343479

  return {
    events: {
      'ticket.save':'validateRegex'
    },

    validateRegex: function() {
      var id      = this.setting('regex_field_id'),
          ticket  = this.ticket(),
          value   = ticket.customField("custom_field_" + id),
          isnum   = /^\d+$/.test(value);

      if (value === '' || value === undefined || value === null || isnum === false ) { 
        console.log('please put a number only inside of the regex field!'); 
        return false;
      } else { 
        console.log('proceed'); 
        return true;
      }

    }
  };

}());
