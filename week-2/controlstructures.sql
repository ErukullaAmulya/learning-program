DECLARE
    v_num NUMBER := 5;
    v_factorial NUMBER := 1;
    v_message VARCHAR2(100);
BEGIN
    -- Conditional IF-THEN-ELSE
    IF v_num < 0 THEN
        v_message := 'Negative number';
    ELSIF v_num = 0 THEN
        v_message := 'Zero';
    ELSE
        v_message := 'Positive number';
    END IF;

    DBMS_OUTPUT.PUT_LINE('Message: ' || v_message);

    -- Iterative FOR LOOP to calculate factorial
    FOR i IN 1..v_num LOOP
        v_factorial := v_factorial * i;
    END LOOP;

    DBMS_OUTPUT.PUT_LINE('Factorial of ' || v_num || ' is ' || v_factorial);

    -- CASE statement
    CASE v_num
        WHEN 1 THEN DBMS_OUTPUT.PUT_LINE('Number is one');
        WHEN 5 THEN DBMS_OUTPUT.PUT_LINE('Number is five');
        ELSE DBMS_OUTPUT.PUT_LINE('Number is something else');
    END CASE;

    -- WHILE LOOP
    DECLARE
        i NUMBER := 1;
    BEGIN
        WHILE i <= 3 LOOP
            DBMS_OUTPUT.PUT_LINE('WHILE loop iteration: ' || i);
            i := i + 1;
        END LOOP;
    END;

END;
/
