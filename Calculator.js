import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JTextField;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Font;

public class Calculator {

	private JFrame frmSimpleCalc;
	private JTextField textBox;
	private String display;
	public String operator;
	public int result;
	public int no1, no2;

	/*** Launch the application.*/
  
  
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					Calculator window = new Calculator();
					window.frmSimpleCalc.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/*** Create the application */
  
  
	public Calculator() {
		initialize();
	}

	/*** Initialize the contents of the frame*/
  
  
	private void initialize() {
		frmSimpleCalc = new JFrame();
		frmSimpleCalc.setTitle("Simple Calc");
		frmSimpleCalc.setBounds(100, 100, 503, 727);
		frmSimpleCalc.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmSimpleCalc.getContentPane().setLayout(null);
		
		textBox = new JTextField();
		textBox.setFont(new Font("Tahoma", Font.PLAIN, 30));
		textBox.setBounds(21, 21, 435, 78);
		frmSimpleCalc.getContentPane().add(textBox);
		textBox.setColumns(10);
		textBox.setHorizontalAlignment(JTextField.RIGHT);
        textBox.setEditable(false);
        
        display = "";
		
		JButton btn_7 = new JButton("7");
		btn_7.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_7.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "7");
			}
		});
		btn_7.setBounds(21, 120, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_7);
		
		JButton btn_8 = new JButton("8");
		btn_8.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_8.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "8");
			}
		});
		btn_8.setBounds(126, 120, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_8);
		
		JButton btn_9 = new JButton("9");
		btn_9.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_9.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "9");
			}
		});
		btn_9.setBounds(227, 120, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_9);
		
		JButton btn_p = new JButton("+");
		btn_p.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_p.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				no1 = Integer.parseInt(textBox.getText());
				textBox.setText(null);
				operator = "+";
			
				
			}
		});
		btn_p.setBounds(343, 120, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_p);
		
		JButton btn_4 = new JButton("4");
		btn_4.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "4");
			}
		});
		btn_4.setBounds(21, 205, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_4);
		
		JButton btn_5 = new JButton("5");
		btn_5.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_5.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				display = textBox.getText();
				textBox.setText(display + "5");
			}
		});
		btn_5.setBounds(126, 205, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_5);
		
		JButton btn_6 = new JButton("6");
		btn_6.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_6.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "6");
			}
		});
		btn_6.setBounds(227, 205, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_6);
		
		JButton btn_m = new JButton("-");
		btn_m.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_m.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				no1 = Integer.parseInt(textBox.getText());
				textBox.setText(null);
				operator = "-";
				
			}
		});
		btn_m.setBounds(343, 205, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_m);
		
		JButton btn_1 = new JButton("1");
		btn_1.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "1");
			}
		});
		btn_1.setBounds(21, 291, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_1);
		
		JButton btn_2 = new JButton("2");
		btn_2.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "2");
			}
		});
		btn_2.setBounds(126, 291, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_2);
		
		JButton btn_3 = new JButton("3");
		btn_3.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "3");
			}
		});
		btn_3.setBounds(227, 291, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_3);
		
		JButton btn_t = new JButton("*");
		btn_t.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_t.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				no1 = Integer.parseInt(textBox.getText());
				textBox.setText(null);
				operator = "*";
			}
		});
		btn_t.setBounds(343, 291, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_t);
		
		JButton btn_0 = new JButton("0");
		btn_0.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_0.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display = textBox.getText();
				textBox.setText(display + "0");
			}
		});
		btn_0.setBounds(126, 377, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_0);
		
		JButton btn_d = new JButton("/");
		btn_d.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_d.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				no1 = Integer.parseInt(textBox.getText());
				textBox.setText(null);
				operator = "/";
			}
		});
		btn_d.setBounds(343, 377, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_d);
		
		JButton btnClear = new JButton("Clear");
		btnClear.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btnClear.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				textBox.setText(null);
			}
		});
		btnClear.setBounds(161, 570, 161, 65);
		frmSimpleCalc.getContentPane().add(btnClear);
		
		JButton btn_e = new JButton("=");
		btn_e.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btn_e.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				no2 = Integer.parseInt(textBox.getText());
				
				
				
				if(operator.contentEquals("+")) {
					result = no1+no2;
					textBox.setText(result + "");
					} else if(operator.contentEquals("-")) {
						result = no1-no2;
						textBox.setText(result + "");	
					}else if(operator.contentEquals("*")) {
						result = no1*no2;
						textBox.setText(result + "");
					}else if(operator.contentEquals("/")) {
						result = no1/no2;
						textBox.setText(result + "");
					}
							
			}
		});
		btn_e.setBounds(343, 465, 95, 78);
		frmSimpleCalc.getContentPane().add(btn_e);
		
		JButton btnVoid1 = new JButton("");
		btnVoid1.setEnabled(false);
		btnVoid1.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btnVoid1.setBounds(21, 377, 95, 78);
		frmSimpleCalc.getContentPane().add(btnVoid1);
		
		JButton btnVoid2 = new JButton("");
		btnVoid2.setEnabled(false);
		btnVoid2.setFont(new Font("Tahoma", Font.PLAIN, 30));
		btnVoid2.setBounds(227, 377, 95, 78);
		frmSimpleCalc.getContentPane().add(btnVoid2);
	}
}
