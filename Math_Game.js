import java.util.Random;
import java.util.Scanner;

public class Math_Game {

	public static void main(String[] args) {
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
	}

