import java.util.Scanner;

public class Number {

	public static void main(String[] args) {
		
		System.out.print("Please choose the case number: \n 1)isVowel \n 2)allDigitsOdd \n 3)countVowels \n 4)circle area \n 5)distanceFromOrigin \n 6)attendance \n  ENTER A NUMBER :");
		Scanner input = new Scanner(System.in);
		
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
	
	}
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
		
}
