import java.awt.BorderLayout;
import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.JTextField;
import java.awt.Font;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JLabel;

public class cal_app extends JFrame {

	private JPanel contentPane;
	private JTextField txt_num1;
	private JTextField txt_operator;
	private JTextField txt_num2;
	private JTextField txt_result;

	/*** Launch the application */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					cal_app frame = new cal_app();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/*** Create the frame */
  
  
	public cal_app() {
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setBounds(100, 100, 321, 526);
		contentPane = new JPanel();
		contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
		setContentPane(contentPane);
		contentPane.setLayout(null);
		
		txt_num1 = new JTextField();
		txt_num1.setFont(new Font("Tahoma", Font.PLAIN, 24));
		txt_num1.setBounds(56, 68, 186, 32);
		contentPane.add(txt_num1);
		txt_num1.setColumns(10);
		
		txt_operator = new JTextField();
		txt_operator.setFont(new Font("Tahoma", Font.PLAIN, 24));
		txt_operator.setBounds(127, 121, 36, 26);
		contentPane.add(txt_operator);
		txt_operator.setColumns(10);
		
		txt_num2 = new JTextField();
		txt_num2.setFont(new Font("Tahoma", Font.PLAIN, 24));
		txt_num2.setBounds(56, 171, 186, 32);
		contentPane.add(txt_num2);
		txt_num2.setColumns(10);
		
		JButton plus = new JButton("+");
		plus.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txt_operator.setText("+");
				int no1 = Integer.parseInt(txt_num1.getText());
				int no2 = Integer.parseInt(txt_num2.getText());
				
				int result = no1+no2;
				
				String result_show =Integer.toString(result);
				
				txt_result.setText(result_show);
				
				
			}
		});
		plus.setBounds(21, 298, 47, 35);
		contentPane.add(plus);
		
		JButton minus = new JButton("-");
		minus.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txt_operator.setText("-");
				int no1 = Integer.parseInt(txt_num1.getText());
				int no2 = Integer.parseInt(txt_num2.getText());
				
				int result = no1-no2;
				
				String result_show =Integer.toString(result);
				
				txt_result.setText(result_show);
				
			}
		});
		minus.setBounds(89, 298, 47, 35);
		contentPane.add(minus);
		
		JButton times = new JButton("*");
		times.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txt_operator.setText("*");
				int no1 = Integer.parseInt(txt_num1.getText());
				int no2 = Integer.parseInt(txt_num2.getText());
				
				int result = no1*no2;
				
				String result_show =Integer.toString(result);
				
				txt_result.setText(result_show);
				
			}
		});
		times.setBounds(157, 298, 47, 35);
		contentPane.add(times);
		
		JButton divide = new JButton("/");
		divide.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				txt_operator.setText("/");
				int no1 = Integer.parseInt(txt_num1.getText());
				int no2 = Integer.parseInt(txt_num2.getText());
				
				int result = no1/no2;
				
				String result_show =Integer.toString(result);
				
				txt_result.setText(result_show);
				
			}
		});
		divide.setBounds(227, 298, 47, 35);
		contentPane.add(divide);
		
		JButton btnExit = new JButton("Exit");
		btnExit.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				System.exit(1);
			}
		});
		btnExit.setBounds(81, 420, 141, 35);
		contentPane.add(btnExit);
		
		txt_result = new JTextField();
		txt_result.setBounds(56, 245, 186, 32);
		contentPane.add(txt_result);
		txt_result.setColumns(10);
		
		JLabel lblResult = new JLabel("Result");
		lblResult.setBounds(115, 220, 92, 26);
		contentPane.add(lblResult);
		
		JButton btn_Calcualte = new JButton("Calcualte");
		btn_Calcualte.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				if(txt_operator.getText().equals("+")) {
					txt_operator.setText("+");
					int no1 = Integer.parseInt(txt_num1.getText());
					int no2 = Integer.parseInt(txt_num2.getText());
					
					int result = no1+no2;
					
					String result_show =Integer.toString(result);
					
					txt_result.setText(result_show);
				}else if (txt_operator.getText().equals("-")){
					txt_operator.setText("-");
					int no1 = Integer.parseInt(txt_num1.getText());
					int no2 = Integer.parseInt(txt_num2.getText());
					
					int result = no1-no2;
					
					String result_show =Integer.toString(result);
					
					txt_result.setText(result_show);
				}else if (txt_operator.getText().equals("*")){
					txt_operator.setText("*");
					int no1 = Integer.parseInt(txt_num1.getText());
					int no2 = Integer.parseInt(txt_num2.getText());
					
					int result = no1*no2;
					
					String result_show =Integer.toString(result);
					
					txt_result.setText(result_show);
				} else if (txt_operator.getText().equals("/")){
					txt_operator.setText("/");
					int no1 = Integer.parseInt(txt_num1.getText());
					int no2 = Integer.parseInt(txt_num2.getText());
					
					int result = no1/no2;
					
					String result_show =Integer.toString(result);
					
					txt_result.setText(result_show);
				}
				
				
			}
		});
		btn_Calcualte.setBounds(81, 364, 141, 35);
		contentPane.add(btn_Calcualte);
		
		JLabel lblCalculator = new JLabel("Calculator");
		lblCalculator.setFont(new Font("Tahoma", Font.BOLD, 30));
		lblCalculator.setBounds(67, -6, 165, 53);
		contentPane.add(lblCalculator);
	}

}
