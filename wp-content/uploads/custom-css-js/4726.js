<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
/* Default comment here */ 

jQuery(document).ready(function( $ ){
    // Your code in here
    $.get("https://api.db-ip.com/v2/free/self", function(response) {
      if(response.ipAddress){
        $("input.remote_ip").val(response.ipAddress)
      }
    }, "json")
});</script>
<!-- end Simple Custom CSS and JS -->
