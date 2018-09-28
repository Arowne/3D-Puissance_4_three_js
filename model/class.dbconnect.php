<?php 
class Dbconnect
{
	private $server = 'localhost';
	private $user = 'root';
	private $password = 'root';
	private $dbname = 'puissance4';
	public $connexion;
	
	function __construct($server=null,$dbname = null,$user = null, $password = null) 
	{
		if ($server != null ) {
			$this->server = $server;
			$this->dbname = $dbname;
			$this->user = $user;
			$this->password = $password;
		}
		try
		{
			$this->connexion = new PDO("mysql:host=".$this->server.";dbname=".$this->dbname.";charset=utf8", $this->user, $this->password);
			$this->connexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		}
		catch(PDOException $e)
		{
			$e->getMessage();
		}
		if (!isset($_SESSION)) {
			session_start();
		}
	}

	public function reqDbExec($sql, $data = array())
	{
		$reqdb = $this->connexion->prepare($sql);
		return $reqdb;
	}
	
	public function reqDbObj($sql, $data = array())
	{
		$reqdb = $this->connexion->prepare($sql);
		$reqdb->execute($data);
		return $reqdb->fetchall(PDO::FETCH_OBJ);
	}
}