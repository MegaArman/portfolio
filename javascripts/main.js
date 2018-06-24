$(function() 
{
  $('a[href^="mailto:"]').each(function() 
  {
    this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
    // Remove this line if you don't want to set the email address as link text:
    this.innerHTML = this.href.replace('mailto:', '');
  });
});


