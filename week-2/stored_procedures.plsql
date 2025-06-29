CREATE OR REPLACE PROCEDURE update_salary_bonus (
    p_emp_id   IN     EMPLOYEES.emp_id%TYPE,
    p_bonus    IN OUT NUMBER,
    p_new_sal  OUT    NUMBER
)
IS
    v_current_salary EMPLOYEES.salary%TYPE;
    CURSOR emp_cur IS
        SELECT emp_id, emp_name FROM EMPLOYEES;
BEGIN
    -- Get current salary
    SELECT salary INTO v_current_salary
    FROM EMPLOYEES
    WHERE emp_id = p_emp_id;

    -- Update salary with bonus
    UPDATE EMPLOYEES
    SET salary = salary + p_bonus
    WHERE emp_id = p_emp_id;

    -- Set OUT parameter
    SELECT salary INTO p_new_sal
    FROM EMPLOYEES
    WHERE emp_id = p_emp_id;

    -- Display info
    DBMS_OUTPUT.PUT_LINE('Salary updated successfully!');
    DBMS_OUTPUT.PUT_LINE('New Salary: ' || p_new_sal);

    -- Show all employees
    DBMS_OUTPUT.PUT_LINE('--- Employee List ---');
    FOR emp_rec IN emp_cur LOOP
        DBMS_OUTPUT.PUT_LINE('ID: ' || emp_rec.emp_id || ', Name: ' || emp_rec.emp_name);
    END LOOP;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Employee ID not found.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/



SET SERVEROUTPUT ON;

DECLARE
    v_bonus    NUMBER := 5000;
    v_new_sal  NUMBER;
BEGIN
    update_salary_bonus(101, v_bonus, v_new_sal);
    DBMS_OUTPUT.PUT_LINE('Returned Bonus (IN OUT): ' || v_bonus);
    DBMS_OUTPUT.PUT_LINE('Updated Salary (OUT): ' || v_new_sal);
END;
/

