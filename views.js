<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/stylesheets/style.css" />
  <title>Music app</title>
</head>
<body>
  <h1>Welcome to the Music app!</h1>

  <ul>
    <%songs.forEach((song)=>{ %>
      <form>
     <li> 
      <a href="/songs/<%= song._id%>">
        <%= song.name%>
        </a> 
        <a href="/songs/<%=song._id%>/edit">Edit <%=song.name%></a>
        </li>
        </form>
<% }) %>
  </ul>
  <a href="/songs/new">Add your favorite lyrics!</a>
<a class="songs-index-link" href="/songs/">Browse Songs</a>
<a href="/songs">Back to Composers</a>
</body>
</html>
