package Java_Assignments.java_01_first_java.java_05_largest_number;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter total number in which you are comparing: ");
        int numbers=sc.nextInt();
        int largest=0;
        for (int i=1;i<=numbers;i++){
            System.out.print("Enter number "+i+": ");
            int num=sc.nextInt();
            if (num>largest){
                largest=num;
            }
        }
        System.out.print("The Largest number is : "+largest);
    }
}
