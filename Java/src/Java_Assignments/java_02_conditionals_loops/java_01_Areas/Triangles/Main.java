package Java_Assignments.java_02_conditionals_loops.java_01_Areas.Triangles;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter Base and Height of Triangle: ");
        float base=sc.nextFloat();
        float height=sc.nextFloat();
        System.out.print("Enter side for isosceles and equilateral triangle data: ");
        int side=sc.nextInt();
        System.out.println("The Area of Triangle is: "+Area(base,height));
        System.out.println("The Area of Isosceles Triangle is: "+IsoscelesArea(base,height));
        System.out.println("The Area of Equilateral Triangle is: "+EquilateralArea(side));
        System.out.println("The Perimeter of Equilateral Triangle is: "+EquilateralArea(side));

    }

    public static double Area(double base, double height){
        return 0.5*base*height;
    }

    public static double IsoscelesArea(double base, double height){
        return (base*height)/2;
    }

    public static double EquilateralArea(double side){
        return (Math.sqrt(3)*side*side)/4;
    }

    public static double EquilateralPerimeter(double side){
        return 3*side;
    }
}
