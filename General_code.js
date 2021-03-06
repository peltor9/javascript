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



public class GeneralNotes {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner info = new Scanner(System.in);
		System.out.print("Please choose the case number: \n 1)Readline and Database Connect \n 2)Ch2 - Numbers (%) \n 3)Ch3 - Age|Number|Info \n 4)Ch4 - Input|WorkHours \n 5)Ch5 - Loops|Numbers|Odd| \n 6)Ch6 - Condition|If/Else \n 7)Ch7 - Method Loop|While \n 8)Ch8 - Array \n ENTER A NUMBER : ");
		System.out.println(" \n ");
		int number = info.nextInt();
		Scanner input = new Scanner(System.in);
		
		switch (number) {
		case 1:
			readline();
			databaseConnect();	
		break;
		
		case 2: 
			task1();
			task2();
			task3();
			task4();
			task5();
			task6();	
		break;
		
		case 3:
			age(); //Chapter 3
			number(); 
			info(); 
		break;
		
		case 4:
			workHours(); //Chapter 4
		break;
		
		case 5: //Chapter 5
			System.out.print("Please choose the case number: \n 1)Check your GPA for award \n 2)Check if the number is odd \n 3)Check your income level \n 4)Check if the nemuber is divisible by 2,3 or 5 \n 5)Check your GPA \n ENTER A NUMBER :");
			int number4 = info.nextInt();
			switch (number4) {
			case 1:
			gpa(info);
			break;
			case 2:
				evenOdd(info);
			break;
			case 3:
				whatClass(info);
			break;
			case 4:
				divide();
			break;	
			case 5:
				gpaCalculator(info);
			break; }
		break;
		
		case 6:
			mathTest(); //Chapter 6
		break;
		
		case 7: //Chapter 7
			System.out.print("Please choose the case number: \n 1)isVowel \n 2)allDigitsOdd \n 3)countVowels \n 4)circle area \n 5)distanceFromOrigin \n 6)attendance \n  ENTER A NUMBER :");
			int number3 = input.nextInt();
			switch (number3) {
			case 1:
			System.out.println(isVowel("q"));	
			break;
			case 2:
			System.out.println(allDigitsOdd(234));
			break;
			case 3:
			System.out.println(countVowels("Marty Stepp"));
			break;
			case 4:
			System.out.println(area(input));
			break;
			case 5:
			System.out.println(distanceFromOrigin(input));
			break;
			case 6:
			System.out.println(attendance(input));
			break;}
		break;
		
		case 8: // Chapter 8
			System.out.print("Please choose the case number: \n 1)Weather problem \n 2)Reverse problem \n 3)Even number \n 4)Max Min Average \n 5)Longest string \n 6)Student mark \nOpen: ");
			int number2 = input.nextInt();
			switch (number2) {
			case 1:
			weahter_problem(input);
			break;
			case 2:
			reverse_problem();
			break;
			case 3:
			even_number(input); 
			break;
			case 4:
			max_min_avg();
			break;
			case 5:
			longest_string(input);
			break;
			case 6:
			student_mark(input);
			break;
		}	
		break;
		
		default:
			System.out.print("EXIT");
		break;	}
		}
	
	
	
	
	
																				// Readline for txt
																			
	public static void readline() {
		
		/*
		package file_processing;
		import java.io.*;
		import java.util.*;
		import java.util.Scanner;

		
		Scanner file = new Scanner(new File("TodWebsite.txt"));
		  
		  System.out.println("Welcome to file processing");
		  int linenum = 0;
		  
		  // Scanning each line
		  while (file.hasNextLine() ) {
		   linenum++;
		   
		   String line = file.nextLine();
		   // Scanning tokens inside the Line
		   Scanner linescan = new Scanner(line);
		   while(linescan.hasNext() ) {
		    String token = linescan.next();
		    
		    if(token.contains("https") ) {
		     System.out.print("Found HTTPS at line "+linenum+": "+token+"\n");
		    }
		    else if (token.contains("http")) {
		     System.out.print("Found HTTP at line "+linenum+": "+token+"\n");
		    } }	}	 
		    
		     */
		} 
		    
		  
	
	
	
	
	
	
	
																			// DATABASE CONNECT
	
	public static void databaseConnect() {
		//package ict202_database;
		//import java.sql.Connection;
		
		try {
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/ict202", "root", "");
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("Select * from student where gender = 'F' ");
			
		while(rs.next()) {
			System.out.println("First name:"+rs.getString("stu_fname"));
			System.out.println("Last name:"+rs.getString("stu_lname"));
		}	
		String fname = "Peter";
		String lname = "White";
		String stu_id = "5906682";
		String gender = "M";
		String query1 = "Insert student values ('"+stu_id+"','"+fname+"','"+lname+"','"+gender+"')";
		Statement stmt1 = conn.createStatement();
		stmt1.executeUpdate(query1);
		System.out.println("Insert Successfully");
			
		}	catch (Exception e) {
			System.err.println(e);	}	}

	
	
	
	
	
	
	
	
	
	
																				//Chapter 2
	
public static void task1() {
		
		int number1 = 230857;
		
		int lastDigit = number1 % 10;
		
		System.out.println("1)Last digit of 230857 is " + lastDigit);
	}
	
public static void task2() {
		
		int number2 = 658236489;
		
		int fourDigit = number2 % 10000;
		
		System.out.println("2)The last 4 digits of 6582356489 are: " + fourDigit);
	}
	
public static void task3() {
	
	int number3 = 7342;
	
	int tenthDigit = number3 % 100;
	
	int secondLast = tenthDigit / 10;
	
	System.out.println("3)The second last digit of 7342 is: " + secondLast);
}

public static void task4() {
	
	int number4 = 5;
	
	int oddNumber = number4 % 2;
	
	System.out.println("4)Odd = 1, Even = 0. Result = " + oddNumber);
}

public static void task5() {
	
	int number5 = 54;
	
	int division = number5 % 27;
	
	System.out.println("5)If the result is zeros then its divisible by 27. Result = " + division);
}

public static void task6() {
	
	double ICT101 = 4, ICT102 = 3.5, ICT103 = 3, ICT203 = 2.5, ICT306 = 3, ICT489 = 1, ICT211 = 1.5, credit3 = 3, credit6= 6;
	
	double gpa = (ICT101*credit3 + ICT102*credit3 + ICT103*credit3 + ICT203*credit3 + ICT306*credit3 + ICT489*credit6 + ICT211*credit3)/24;
	
	System.out.println("6)Calculating the GPA");
	System.out.println("Subject Code	Credit		Grade");
	System.out.println("ICT101		3		4");		
	System.out.println("ICT102		3		3.5");
	System.out.println("ICT103		3		3");
	System.out.println("ICT203		3		2.5");
	System.out.println("ICT306		3		3");
	System.out.println("ICT489		6		1");
	System.out.println("ICT211		3		1.5");
	System.out.println("Average GPA:" + gpa );
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
																			//Chapter 3
	
	public static void info() {
		
		Scanner info = new Scanner(System.in);
		System.out.print("Enter your name: ");
		String name = info.next();
		System.out.print("Enter your age: ");
		int age = info.nextInt();
		System.out.print("Enter your id: ");
		String idnumber = info.next();
		System.out.println("Your Information: " + name +" "+ age + " " + idnumber);
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
	
	public static void age() {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.print("What is your age ");
		int age = scan.nextInt();
		
		System.out.println("You will be 40 in " + (40 - age) + " years");
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
																				//Chapter 4
	
	public static void workHours() {
		int n,sum1=0, days, sum2=0;
		        
		        Scanner data=new Scanner(System.in);

		System.out.println("Employee 1: How many days?");
		         days=data.nextInt();
		         int a[]=new int[days]; 
		         
		         for(int i=0;i<days;i++)
		         {      
		       System.out.println("Hours?:");
		                 a[i]=data.nextInt();  }
		         		         for(int i=0;i<days;i++)  {  sum1+=a[i];	}  	    
		         System.out.println("Employee 1's total paid hours = "+sum1);
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

																				// Chapter 5
	
public static void gpa(Scanner info) {
		
		System.out.print("Enter your GPA: ");
		double grade1 = info.nextDouble();
		
		if(grade1 >= 3.8) {
			System.out.print("You are on the dean's list");
		}
		else if(grade1 >= 3.5) {
			System.out.print("You are on the honor's list");
		}
		else {
			System.out.print("Sorry your GPA is too low");
		}
	}
	
	public static void evenOdd(Scanner info) {
		System.out.print("Enter a number: ");
		int number = info.nextInt();
		
		if(number % 2 == 0) {
			System.out.print("Even number");
		}
		else {
			System.out.print("Odd number");
		}
	}
	
	public static void whatClass(Scanner info) {
		
		System.out.print("Enter your salary: ");
		int salary = info.nextInt();
		
		if( salary >= 10000) {
			System.out.print("You are in the Upper Class");
		}
		else if(salary >= 5000) {
			System.out.print("You are Middle class");
		}
		else {
			System.out.print("You are lower class");
		}
	}
	
	public static void divide() {
		for(int i=1; i<=10000;i++) {
			if((i % 2 ==0) && ( i % 3 ==0) && (i % 5 ==0)) {
				System.out.print(i);
			}
		}
	}
	
	public static void gpaCalculator(Scanner info) {	
		System.out.println("Subject Code	Credit		Grade");
		System.out.println("ICT101		3		A");		
		System.out.println("ICT102		3		B+");
		System.out.println("ICT103		3		B");
		System.out.println("ICT203		3		C+");
		System.out.println("ICT306		3		C");
		System.out.println("ICT489		6		D");
		System.out.println("ICT211		3		F");
		
		String grade = "";
        String[] letters = {"A", "B+", "B", "C+", "C", "D", "F"};
        double[] grades = {4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.00};
        double credit1;
        double credit2;
        double credit3;
        double credit4;
        double credit5;
        double credit6;
        double credit7;
        double gradeValue = 0;
 
        double totPtsClass1 = 0;
        double totPtsClass2 = 0;
        double totPtsClass3 = 0;
        double totPtsClass4 = 0;
        double totPtsClass5 = 0;
        double totPtsClass6 = 0;
        double totPtsClass7 = 0;
        double totPts = 0;
        double totalCredits = 0;
        double gpa;     

        System.out.println("Please enter the number of credits of the class 1 ");
        credit1 = info.nextDouble();
        System.out.println("Please enter your grade for the class 1");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass1 = gradeValue * credit1;
        
        
        System.out.println("Please enter the number of credits of the class 2 ");
        credit2 = info.nextDouble();
        System.out.println("Please enter your grade for the class 2");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass2 = gradeValue * credit2;
        
        
        System.out.println("Please enter the number of credits of the class 3 ");
        credit3 = info.nextDouble();
        System.out.println("Please enter your grade for the class 3");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass3 = gradeValue * credit3;
        
        System.out.println("Please enter the number of credits of the class 4 ");
        credit4 = info.nextDouble();
        System.out.println("Please enter your grade for the class 4");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass4 = gradeValue * credit4;
        
        
        System.out.println("Please enter the number of credits of the class 5 ");
        credit5 = info.nextDouble();
        System.out.println("Please enter your grade for the class 5");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass5 = gradeValue * credit5;
        
        
        System.out.println("Please enter the number of credits of the class 6 ");
        credit6 = info.nextDouble();
        System.out.println("Please enter your grade for the class 6");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass6 = gradeValue * credit6;
        
        
        System.out.println("Please enter the number of credits of the class 7 ");
        credit7 = info.nextDouble();
        System.out.println("Please enter your grade for the class 7");
        grade = info.next();
        if (grade.equals("A")) gradeValue = 4;
        else if (grade.equals("B+")) gradeValue = 3.5;
        else if (grade.equals("B")) gradeValue = 3;
        else if (grade.equals("C+")) gradeValue = 2.5;
        else if (grade.equals("C")) gradeValue = 2;
        else if (grade.equals("D")) gradeValue = 1.5;
        else if (grade.equals("F")) gradeValue = 1;
        else System.out.println("Invalid Grade");
        totPtsClass7 = gradeValue * credit7;
        
        
        totPts = totPtsClass1*credit1 + totPtsClass2*credit2 + totPtsClass3*credit3 + totPtsClass4*credit4 + totPtsClass5*credit5 + totPtsClass6*credit6 + totPtsClass7*credit7;
        gpa = totPts/7;
        System.out.printf("Your GPA is: " + gpa);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
																				//Chapter 6
	
	public static void mathTest() {
		Random rand = new Random();
		Scanner console = new Scanner(System.in);
		int sum = 0;
		int answer = 0;
		char oper;
		int point = 0;
		System.out.print("Choose an Operator \n 1)Addition \n 2)Subtraction \n 3)Multiplication \n 4)Devision \n |-1 to quit| \n ");
		while (true) {System.out.print("Enter an operator number :");
		
		int inputNumber = console.nextInt();
		if (inputNumber == 1) { // don't add -1 to sum
			while (true) {
				int a = rand.nextInt(20) + 1;
				int b = rand.nextInt(20) + 1;
				System.out.print(a+" + "+b+" = ");
				int calc = console.nextInt();
				if (a + b == calc) {
					answer = a + b;
					System.out.println("Correct!");
					point = point+1;
				} else { 
					System.out.println("Incorrect; The correct answer was :" + answer);
					System.out.println("______________________________________");
					break;}	 } }
		else if (inputNumber == 2) { // don't add -1 to sum
			while (true) {
				int a = rand.nextInt(20) + 1;
				int b = rand.nextInt(20) + 1;
				System.out.print(a+" - "+b+" = ");
				int calc = console.nextInt();
				if (a - b == calc) {
					answer = a - b;
					System.out.println("Correct!");
					point = point+1;
				} else { 
					System.out.println("Incorrect; The correct answer was :" + answer);
					System.out.println("______________________________________");
					break;}	} }
		if (inputNumber == 3) { // don't add -1 to sum
			while (true) {
				int a = rand.nextInt(20) + 1;
				int b = rand.nextInt(20) + 1;
				System.out.print(a+" * "+b+" = ");
				int calc = console.nextInt();
				if (a * b == calc) {
					answer = a * b;
					System.out.println("Correct!");
					point = point+1;
				} else { 
					System.out.println("Incorrect; The correct answer was :" + answer);
					System.out.println("______________________________________");
					break;}	} }
		if (inputNumber == 4) { // don't add -1 to sum
			while (true) {
				int a = rand.nextInt(20) + 1;
				int b = rand.nextInt(20) + 1;
				System.out.print(a+" / "+b+" = ");
				int calc = console.nextInt();
				if (a / b == calc) {
					answer = a / b;
					System.out.println("Correct!");
					point = point+1;
				} else { 
					System.out.println("Incorrect; The correct answer was :" + answer);
					System.out.println("______________________________________");
					break;}	} }
		else if (inputNumber == -1) {
			break; } }
		System.out.println("You solved " + point + " correctly"); }		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
																				// CHAPTER 7

public static boolean isVowel(String word) {
	
	for(int i=0;i<word.length();i++){			  
		char vowels=word.charAt(i);
	        if(vowels== 'a'|| vowels =='e' || vowels=='i'|| vowels == 'o' ||  vowels == 'u'){
	        	return true;
	        }  }
	    return false;	
	    
}

public static boolean allDigitsOdd(int number) {

    while (number > 0) {
        int digit = number % 10;
        number = number / 10;
        
        if (digit % 2 == 0) { 
        	System.out.println("False");
            return false; }      }
    
 System.out.println("True");
    return true;
}

	public static int countVowels(String vowels) {
		int count = 0;
		String str = vowels;
		
		for(int i=0; i<str.length(); i++) {
			if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
				count++;
			}else {
				count = count + 0;
			}
		}
		return count;
	}
		
	public static double area(Scanner input) {
		System.out.print("Enter diameter of the circle: ");
		double diameter = input.nextDouble(); 
		double rad2 = ((diameter/2)*(diameter/2));
		double areaC = Math.PI * rad2;
		return areaC;			
	}	
	
	public static double distanceFromOrigin(Scanner input) {
		System.out.print("Enter coordinate X :");
		double x = input.nextDouble();
		System.out.print("Enter coordinate Y :");
		double y = input.nextDouble();
		double distance = Math.max(x, y) - Math.min(x, y);
		
		return distance;	
	}
	
	public static double attendance(Scanner input) {
		System.out.print("Enter amount of classes you have attended: ");
		double attend = input.nextDouble();
		double score;
		if(attend < 5) {
			score = attend * 2;
		} else {
			score = ((attend - 5) * 1) + 10;
		}
		return score;			
				}
	
	
	
	
	
	
	
	
	
	
	
																					//Chapter 8
	
public static void weahter_problem(Scanner text) {
		
		System.out.print("How many days' temperatures? ");
		int days = text.nextInt();
		double[] temp = new double[days];
		int avgAbove = 0;
		for(int i=0;i<days;i++) {
			System.out.print("Day "+(i+1)+"'s high temp:  ");
			temp[i] = text.nextDouble();
			if(temp[i]>=45) {
				avgAbove = avgAbove + 1; 	}	}
		double sumTemp = DoubleStream.of(temp).sum();
		double avgTemp = sumTemp / days;
		System.out.println("Average temp = " + avgTemp);
		System.out.println(avgAbove + " days were above average.");
	}

	
	public static void reverse_problem() {
		Random rd = new Random();
		int[] arr = new int[100];
		for (int i = 0; i < arr.length; i++) {
	         arr[i] = Math.abs(rd.nextInt()); 
	         }
		int[] rndNum = arr;
		 for (int i = rndNum.length-1; i >= 0; i--) {  
	            System.out.println((i+1)+" "+rndNum[i]);  }
	         }
	
	
	public static void even_number(Scanner text) {
		System.out.println("Enter 10 positive numbers: ");
		double[] arr = new double[10];	
		int even = 0;
		for(int i=0;i<10;i++) {
			arr[i] = text.nextDouble();
			if ( arr[i] % 2 == 0 )
				even = even + 1;		}	
		 System.out.println("You entered " + even + " even numbers");		}
	
	public static void max_min_avg() {
		
		int max = 100;
		int min = 1;
		Random rand = new Random();
		int randomNum = rand.nextInt((max - min) + 1) + min;
		int[] ar = new int[100];
		
		for(int i=0; i<ar.length; i++) {
			ar[i] = rand.nextInt((max - min) + 1) + min;;
			System.out.println(ar[i]);
		}
		int maxNum = Arrays.stream(ar).max().getAsInt();
		int minNum = Arrays.stream(ar).min().getAsInt();
		int sumAvg = IntStream.of(ar).sum();
		double avgNum = sumAvg / ar.length;
		System.out.println(randomNum);
		System.out.println("The Largest number is "+maxNum);
		System.out.println("The Smallest number is "+minNum);
		System.out.println("The Average number is "+avgNum);	
	}
	
	public static void longest_string(Scanner text) {
		System.out.print("How many Strings? ");
		int textIn = text.nextInt();
		String[] arS = new String[textIn];
		for(int i=0;i<textIn;i++) {
			System.out.print("Enter your text: ");
			arS[i] = text.next();
		}
		String longest = getLongestString(arS);
		System.out.println("The longest string was: "+longest);
	}	
	private static String getLongestString(String[] arS) {
		for (int j = 0; j <= arS.length; j++) {
	        if (arS[j].length() > arS[j + 1].length()) {
	                return (arS[j]);        }	        }		return null;	}

	public static void student_mark(Scanner text) {
	int[] idS = new int[10];
	int[] mark = new int[10];
	for(int i=0; i<10; i++) {
		System.out.print((i+1)+") Enter your Student ID: ");
		idS[i] = text.nextInt();
		System.out.print((i+1)+") Enter your Mark: ");
		mark[i] = text.nextInt();	}
	System.out.println("Student ID \tMark");
	for(int j=0;j<10;j++) {
		System.out.println(idS[j]+"\t \t"+mark[j]);
	}		
	}
	








}
