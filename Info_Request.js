import java.io.File;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;

puplic class void main(String[] args) {

number();

}

public static void number() {
	
	Scanner console = new Scanner(System.in);
	
	System.out.print("Please type three numbers: ");
	int num1 = console.nextInt();
	int num2 = console.nextInt();
	int num3 = console.nextInt();
	
	double average = (double) (num1 + num2 + num3) / 3;
	System.out.println("The average is " + average);
	
	}
  
  
