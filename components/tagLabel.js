const TagLabel = ({
    backgroundColor = "red",
    textColor = "white",
    children,
}) => {
    return (
        <div
            style={{
                backgroundColor,
                color: textColor,
                display: "inline",
                borderRadius: 5,
                paddingRight: 5,
                paddingLeft: 5,
            }}
        >
            {children}
        </div>
    );
};

export default TagLabel;
