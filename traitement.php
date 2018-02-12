<?php
echo "traitement";
echo "<hr>";
echo "<pre>";
print_r($_POST);
echo "</pre>";
echo "<hr>";
echo "<pre>";
print_r($_FILES);
echo "</pre>";
echo "<hr>";

if ($_POST) {
  echo "l'user" . $_POST["nom"] . " " . $_POST["prenom"] . "veut s'enregistrer <br>";
}
