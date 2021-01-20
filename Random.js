import java.util.Scanner;
import java.util.stream.*;
import java.util.Random;
import java.util.*;
public class random_num {

	public static void main(String[] args) {
		Scanner text = new Scanner(System.in);
		System.out.print("Please choose the case number: \n 1)Weather problem \n 2)Reverse problem \n 3)Even number \n 4)Max Min Average \n 5)Longest string \n 6)Student mark \nOpen: ");
		int number = text.nextInt();
		switch (number) {
		case 1:
		weahter_problem(text);
		break;
		case 2:
		reverse_problem();
		break;
		case 3:
		even_number(text); 
		break;
		case 4:
		max_min_avg();
		break;
		case 5:
		longest_string(text);
		break;
		case 6:
		student_mark(text);
		break;}
	}
	
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
